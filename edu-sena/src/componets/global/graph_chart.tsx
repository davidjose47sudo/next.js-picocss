"use client"
import { Bar, Doughnut, Line, Scatter } from 'react-chartjs-2';
import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip
} from 'chart.js';
import { graphdataDuonunt, graphdataMixte, graphdataBar, graphdataLine } from '@/types/graph_chart';
Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip
);

export const LineChart = (config: graphdataLine) => {
    return <Line style={{ height: '638px', width: '638px', background: 'white',borderRadius:'10px' }} data={config} />;
};
export const BarChart = (config: graphdataBar) => {
    return <Bar style={{ height: '638px', width: '638px', background: 'white' ,borderRadius:'10px'}} data={config} />;
};
export const DoughnutChart = (config: graphdataDuonunt) => {
    return <Doughnut style={{ height: '425px', width: '425px', background: 'white',borderRadius:'10px' }} data={config} />;
};
export const MixedChart = (config: graphdataMixte) => {
    return <Bar style={{ height: '825px', width: '850px', background: 'white' ,borderRadius:'10px' }} data={config} />; //este error se ignora porque en la doc del chart esta bien nose porque marca error
};


