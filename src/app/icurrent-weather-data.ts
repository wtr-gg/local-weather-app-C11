export interface ICurrentWeatherData {
  name: string,
  sys: {
    country: string
  },
  dt: number,
  main: {
    temp: number
  },
  weather: [
    {
      description: string
      icon: string
    }
  ]



  /* 
  city: string
  country: string
  date: Date
  image: string
  temperature: number
  description: string */
}
