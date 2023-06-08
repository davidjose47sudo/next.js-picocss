import { BarChart, DoughnutChart, LineChart, LineP } from "@/componets/global/graph_chart";
import Nav from "@/componets/global/nav";
import { graphdataDuonunt, graphdataLine, graphdataBar } from "@/types/graph_chart";
import styles from '../../styles/global/home.module.css'

export default function Home() {

    const data: graphdataLine = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
        datasets: [
            {
                label: 'Ventas',
                data: [4000, 2400, 3200, 5400, 3500],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
        ],
    };
    const data2: graphdataDuonunt = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
        datasets: [
            {
                label: 'Ventas',
                data: [4000, 2400, 3200, 5400, 3500],
                fill: false,
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(36, 85, 158)',
                    'rgb(215, 85, 158)'
                ],
                hoverOffset: 4
            }],
    };

    const data4: graphdataBar = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }]
    };


    const data5 = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: "enviados",
            data: [1,3,4,5,6],
            borderColor: "'rgba(255, 99, 132, 0.2)'",
            backgroundColor: "'rgba(255, 99, 132, 0.2)'",
            yAxisID: "y",
        }]
    };

    data5.datasets.push({
        label: "recibidos",
        data: [1,2,3,4,5],
        borderColor: 'rgb(255, 205, 86)',
        backgroundColor: 'rgb(255, 205, 86)',
        yAxisID: "y",
    })

    return (
        <Nav>
            <div className={styles.desktop}>
                <div className={styles.container_graph}>
                    <div className={styles.container_graph1}>
                        <article>
                            <h5>titulo1</h5>
                            <LineChart datasets={data.datasets} labels={data.labels} />
                        </article>
                        <article>
                            <h5>titulo2</h5>
                            <BarChart labels={data4.labels} datasets={data4.datasets} />
                        </article>
                    </div>
                    <div className={styles.container_graph2}>
                        <article className={styles.Doughnut}>
                            <h5>titulo3</h5>
                            <DoughnutChart labels={data2.labels} datasets={data2.datasets} />
                        </article>
                        <article>
                            <h5>titulo4</h5>
                            <LineP labels={data5.labels} datasets={data5.datasets} />
                        </article>
                    </div>
                </div>
            </div>
        </Nav>
    )
}