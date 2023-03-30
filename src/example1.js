import Chart from 'chart.js/auto'

let colors = [
  {
    id: 1,
    isHidden: false,
    r: 43,
    g: 43,
    b: 22,
  },
  {
    id: 2,
    isHidden: false,
    r: 222,
    g: 12,
    b: 78,
  },
  {
    id: 3,
    isHidden: true,
    r: 12,
    g: 65,
    b: 74,
  },
  {
    id: 4,
    isHidden: true,
    r: 1,
    g: 170,
    b: 221,
  }
]

const colorDatasets = colors.map((el, i) => {
  return {
    label: `rgb color ${i + 1}`,
    hidden: el.isHidden,
    data: [el.r, el.g, el.b],
    backgroundColor: [
      'rgb(255, 0, 0)',
      'rgb(0, 255, 0)',
      'rgb(0, 0, 255)'
    ],
    hoverOffset: 10
  }
})

const data = {
  labels: [
    'Red',
    'Green',
    'Blue'
  ],
  datasets: colorDatasets
}


let colorsDoughnut = new Chart(
  document.getElementById('example1'),
  {
    type: 'doughnut',
    data: data,
  },
);

