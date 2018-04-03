
let fields = [
  { f: 'x', type: 'slider' },
  { f: 'y', type: 'slider' },
  { f: 'z', type: 'slider' },
  { f: 'vx', type: 'slider' },
  { f: 'vy', type: 'slider' },
  { f: 'vz', type: 'slider' },
  { f: 'r', type: 'slider' },
  { f: 'm', type: 'slider' },
  { f: 'et', type: 'checkbox' },
  { f: 'el', type: 'checkbox' },
  { f: 'c', type: 'color' },
  { f: 'tc', type: 'color' }
]
let fieldElems = []
let currentBody = []

function loopFields(func) {
  for (let field of fields) {
    func(field)
  }
}

function initModal() {
  $("#modal-component").load("../../../html/modal-body.html", () => {
    $("#modal-component").draggable({
      handle: ".modal-header"
    });

    loopFields((dataPoint) => {
      let t = dataPoint.type
      switch (t) {
        case 'slider':
          var f = $('#' + dataPoint.f).slider({
            formatter: function (value) {
              return 'value: ' + value;
            }
          })
            .data('slider')

          if (dataPoint.f === 'm' && dataPoint.f === 'r') f.on('slide', updateData)

          fieldElems.push(f)
        case 'color':
          $('#' + dataPoint.f).colorselector()
          break
      }

    })
  })

}

function openModal(body) {
  currentBody = body

  loopFields((dataP) => {
    $('#' + dataP.f).val(g[body.prefix + dataP.f])
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
  loopFields((d) => {
    loopFields((dataP) => {
      g[currentBody.prefix + dataP.f] = $('#' + dataP.f).val()
    })
  })
}