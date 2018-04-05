let fields = [{
        f: 'x',
        type: 'slider'
    },
    {
        f: 'y',
        type: 'slider'
    },
    {
        f: 'z',
        type: 'slider'
    },
    {
        f: 'vx',
        type: 'slider'
    },
    {
        f: 'vy',
        type: 'slider'
    },
    {
        f: 'vz',
        type: 'slider'
    },
    {
        f: 'r',
        type: 'slider'
    },
    {
        f: 'm',
        type: 'slider'
    },
    {
        f: 'et',
        type: 'checkbox'
    },
    {
        f: 'el',
        type: 'checkbox'
    },
    {
        f: 'c',
        type: 'color'
    },
    {
        f: 'tc',
        type: 'color'
    }
]
let fieldElems = []
let colors = [
    '#FF0000',
    '#8C271E',
    '#ABA194',
    '#CFCBCA',
    '#D9F7FA',
    '#FF715B',
    '#1EA896',
    '#7E1F86',
    '#8CA0D7',
    '#F7A9A8',
]

let currentBody

function loopFields(func) {
    for (let field of fields) {
        func(field)
    }
}

function initSlider(d) {
    var f = $('#' + d.f).slider({
            formatter: function (value) {
                return 'value: ' + value;
            },
            tooltip: 'show'
        })
        .data('slider')
        .on('slide', ()=> {
            g[currentBody.prefix + d.f] = Number($('#' + d.f).attr('data-value'))
        })

    fieldElems.push(f)
}
let cp1, cp2

function initColor(d, c) {
    cp1 = $('#c').colorpicker({
        inline: true,
        container: true,
        color: g[currentBody.prefix + 'c']
    }).on('colorpickerChange', function (e) {
        g[currentBody.prefix + 'c'] = e.color.toString('hex');
    })

    cp2 = $('#tc').colorpicker({
        inline: true,
        container: true,
        color: g[currentBody.prefix + 'tc']
    }).on('colorpickerChange', function (e) {
        g[currentBody.prefix + 'tc'] = e.color.toString('hex');

    })
}

function onModalHide() {
    $('.mainmodal').on('hidden.bs.modal', function (e) {
        controls.enableRotate = true
        controls.autoRotate = false
        universe.startTime()

        $('.colorpickr-inline').remove()
    })
}

function modalDraggable() {
    $(".mainmodal").draggable({
        handle: ".modal-header"
    });
}

function initModal() {
    $("#modal-component").load("../../../html/modal-body.html", () => {

        modalDraggable()
        onModalHide()

        loopFields((dataPoint) => {
            let t = dataPoint.type
            if (t === 'slider') {
                initSlider(dataPoint);
            } else if (t === 'checkbox') {
                $('#' + dataPoint.f).on('click', () => {
                    g[currentBody.prefix + dataPoint.f] = $('#' + dataPoint.f).is(':checked')
                })
            }

        })
    })
}

function openModal(body) {
    currentBody = body
    $('.colorpickr-inline').remove()
    controls.enableRotate = false;
    controls.autoRotate = true
    universe.stopTime()

    initColor()

    $('#modal-title').val(body.name)

    $('#body-select option.bodi').remove()

    $.each(universe.bodies, function() {
        $('#body-select').append($('<option class="bodi" />').val(this.name).text(this.name));
    });

    let modal = $('#body-modal')
    modal.modal();
    let curPos = modal.css('top')
    modal.css('top', -250)
    modal.css('opacity', 0)
    modal.animate({
        opacity: 1,
        top: curPos,
    }, 500)

    loopFields((dataP) => {
        if (dataP.type === 'slider') {
            $('#' + dataP.f).slider('setValue', g[body.prefix + dataP.f])
        } else if (dataP.type === 'checkbox') {
            $('#' + dataP.f).prop('checked', g[body.prefix + dataP.f])
        } else {
            $('#' + dataP.f).val(g[body.prefix + dataP.f]);
            $('#colorPicker').colorpicker();
        }
    })
}


$('body').on('change', '#body-select', function() {
    let body = universe.bodies.find((b) => {
        return b.name === $('#body-select').val();
    })
    console.log(body)

    openModal(body)
})

//ew jus some key 

$('body').keypress((e) => {
    if (e.which === 32) { //enter
        universe.timeStopped = !universe.timeStopped
    } else if (e.which === 114) { //r
        universe.restart()
    }
})