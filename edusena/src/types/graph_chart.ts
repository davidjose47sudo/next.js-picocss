export interface graphdataLine {
    labels: string[],
    datasets: [
        {
            label: string,
            data: number[],
            fill: boolean,
            borderColor: string,
            tension: number,
        },
    ],
};

export interface graphdataDuonunt {
    labels: string[],
    datasets: [
        {
            label: string,
            data: number[],
            fill: boolean,
            backgroundColor: string[],
            hoverOffset: number
        },
    ],
};

export interface Linemix {
    labels: string[],
    datasets: [{
        label: string,
        data: number[],
        borderColor: string,
        backgroundColor: string,
        yAxisID: string
    }, {
        label: string,
        data: number[],
        borderColor: string,
        backgroundColor: string,
        yAxisID: string
    }]
};

export interface graphdataBar {
    labels: string[],
    datasets: [{
        label: string,
        data: number[],
        backgroundColor: string[],
        borderColor: string[],
        borderWidth: number
    }]
};