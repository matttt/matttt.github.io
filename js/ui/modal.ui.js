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
            }
        })
        .data('slider')
        .on('slide', updateData)

    fieldElems.push(f)
}

function initColor(d) {
    d.cp = $('#' + d.f).colorpicker({
        inline: true,
        container: true
    }).on('colorpickerChange', function (e) {
        g[currentBody.prefix + d.f] = e.color.toString('hex');
    })
}

function onModalHide() {
    $('.mainmodal').on('hidden.bs.modal', function (e) {
        controls.enableRotate = true
        $(gui.domElement).show(1000, function () {
            universe.startTime()
        })
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
            } else if (t === 'color') {
                initColor(dataPoint);
            } else if (t === 'checkbox') {
                $('#' + dataPoint.f).on('change', () => {
                    g[currentBody.prefix + dataPoint.f] = g[currentBody.prefix + dataPoint.f]
                })
            }

        })
    })
}

function openModal(body) {
    currentBody = body

    controls.enableRotate = false;
    universe.stopTime()
    $(gui.domElement).hide()

    loopFields((dataP) => {
        if (dataP.type != 'color') {
            $('#' + dataP.f).attr('data-value', g[body.prefix + dataP.f])
            $('#' + dataP.f).trigger('change')
        } else {
            $('#' + dataP.f).val(g[body.prefix + dataP.f]);
            $('#colorPicker').colorpicker();
        }
    })

    $('#modal-title').val(body.name)

    let modal = $('#body-modal')
    modal.modal();
    let curPos = modal.css('top')
    modal.css('top', -250)
    modal.css('opacity', 0)
    modal.animate({
        opacity: 1,
        top: curPos,
    }, 500)
}



function updateData() {
    loopFields((dataP) => {
        if (dataP.type != 'color') {
            g[currentBody.prefix + dataP.f] = $('#' + dataP.f).attr('data-value')
        }
    })
}

$('body').keypress((e) => {
    if (e.which === 32) universe.timeStopped = !universe.timeStopped
})