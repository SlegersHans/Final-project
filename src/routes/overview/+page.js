export const load = ({ fetch }) => {
    const fetchPoI = async () => {
    const res = await fetch('https://vda-lab.github.io/assets/vast2021_businesses.json')
    const data = await res.json()
    //   data.forEach((d,i) => { d.id = i, d.species = "Iris " + d.species })
      return data
    }

    return {
      PoI: fetchPoI()
    }
  }