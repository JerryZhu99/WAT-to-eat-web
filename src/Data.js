

const Data = {
    timeData: {},
    categoryData: {},
    loadData() {
        return new Promise((resolve, reject) => setTimeout(() => {

            let dates = [7, 6, 5, 4, 3, 2, 1].map(i => (
                new Date(Date.now() - 24 * 60 * 60 * 1000 * i).toLocaleDateString()
            ))
            this.timeData = {
                data: {
                    labels: dates,
                    datasets: [
                        {
                            label: "Recent spending (in $)",
                            backgroundColor: "#81C784",
                            data: [7.05, 9.33, 4.19, 19.07, 30.23, 7.01, 0]
                        },
                    ]
                },
                options: {
                    responsive: true,
                    bezierCurve: false,
                }
            };
            this.categoryData = {
                data: {
                    labels: ["Food", "Luxury", "Other"],
                    datasets: [
                        {
                            data: [36, 15, 24],
                            backgroundColor: ["#E57373", "#81C784", "#64B5F6"],
                        }
                    ]
                },
            }
            resolve({ timeData: this.timeData, categoryData: this.categoryData })
        }, 500));
    }
}

export default Data