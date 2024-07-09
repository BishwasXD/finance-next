import React from 'react'
import dynamic from 'next/dynamic'

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
interface IDonutProps{
    options:object,
    height?:number,
    width?:number,
    series : number[]
}

const DonutChart = ({options, series, height, width}:IDonutProps) => {
  return (
    <ReactApexChart options={options} series={series} height={height} width={width} type='donut' />
  )
}

export default DonutChart