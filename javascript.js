const api = 'https://api.coinranking.com/v2/coins';

let copyData = [];

function whole() {
    fetch(api).then(function (data) {
        data.json().then(function (respond) {


            copyData = respond.data.coins;
            const info = respond.data.coins;

            var coinsList = '';
            info.forEach(function (element) {

                var priceFixed = Number(element.price)


                if (element.change.includes('-')) {
                    var negative = `<span style="color: #EA3943;">${element.change} %</span> `;
                } else {
                    var negative = `<span style="color: #16c784;">${element.change} %</span> `;
                }


                var div = `
            <div class="tableJS flex" id="to-be-removed">
                <div class="starJS p-10">
                    <i class="fa-regular fa-star"></i>
                </div>
                <div class="crypto-rankJS p-10">
                    <span>${element.rank}</span>
                </div>
                <div class="crypto-iconJS p-10">
                    <img src="${element.iconUrl}" alt="crypto-logo">
                </div>
                <div class="crypto-nameJS p-10">
                    <span>${element.name}</span> <span id="symbol"> ${element.symbol}</span>
                </div>
                <div class="crypto-priceJS p-10">
                    <span>$${priceFixed.toFixed(3)}</span>
                </div>
                <div class="crypto-hourly-changeJS p-10" id="rocket">
                    <span>${negative}</span>
                </div>

                <div class="crypto-market-capJS p-10">
                    <span>$${element.marketCap}</span>
                </div>
                <div class="crypto-colorJS p-10" style="background-color: ${element.color}; ">
                
                </div>
            </div>
            `;

                coinsList = coinsList + div;


            })
            document.getElementById('table-list').innerHTML = coinsList;
        })
    })
}
whole()
function risingCoins() {

    var coinsList = '';

    const filterArr = copyData.filter(function (item) {
        if (item.change >= 0) {
            return item;
        }
    })
    filterArr.forEach(function (element, index) {

        var priceFixed = Number(element.price)


        if (element.change.includes('-')) {
            var negative = `<span style="color: #EA3943;">${element.change} %</span> `;
        } else {
            var negative = `<span style="color: #16c784;">${element.change} %</span> `;
        }


        var div = `
            <div class="tableJS flex" id="to-be-removed">
                <div class="starJS p-10">
                    <i class="fa-regular fa-star"></i>
                </div>
                <div class="crypto-rankJS p-10">
                    <span>${index + 1}</span>
                </div>
                <div class="crypto-iconJS p-10">
                    <img src="${element.iconUrl}" alt="crypto-logo">
                </div>
                <div class="crypto-nameJS p-10">
                    <span>${element.name}</span> <span id="symbol"> ${element.symbol}</span>
                </div>
                <div class="crypto-priceJS p-10">
                    <span>$${priceFixed.toFixed(3)}</span>
                </div>
                <div class="crypto-hourly-changeJS p-10" id="rocket">
                    <span>${negative}</span>
                </div>

                <div class="crypto-market-capJS p-10">
                    <span>$${element.marketCap}</span>
                </div>
                <div class="crypto-colorJS p-10" style="background-color: ${element.color}; ">
                
                </div>
            </div>
            `;

        coinsList = coinsList + div;


    })
    document.getElementById('table-list').innerHTML = coinsList;

}

function decreasingCoins() {

    var coinsList = '';

    const decrArr = copyData.filter(function (item) {
        if (item.change < 0) {
            return item;
        }
    })
    decrArr.forEach(function (element, index) {

        var priceFixed = Number(element.price)


        if (element.change.includes('-')) {
            var negative = `<span style="color: #EA3943;">${element.change} %</span> `;
        } else {
            var negative = `<span style="color: #16c784;">${element.change} %</span> `;
        }


        var div = `
            <div class="tableJS flex" id="to-be-removed">
                <div class="starJS p-10">
                    <i class="fa-regular fa-star"></i>
                </div>
                <div class="crypto-rankJS p-10">
                    <span>${index + 1}</span>
                </div>
                <div class="crypto-iconJS p-10">
                    <img src="${element.iconUrl}" alt="crypto-logo">
                </div>
                <div class="crypto-nameJS p-10">
                    <span>${element.name}</span> <span id="symbol"> ${element.symbol}</span>
                </div>
                <div class="crypto-priceJS p-10">
                    <span>$${priceFixed.toFixed(3)}</span>
                </div>
                <div class="crypto-hourly-changeJS p-10" id="rocket">
                    <span>${negative}</span>
                </div>

                <div class="crypto-market-capJS p-10">
                    <span>$${element.marketCap}</span>
                </div>
                <div class="crypto-colorJS p-10" style="background-color: ${element.color}; ">
                
                </div>
            </div>
            `;

        coinsList = coinsList + div;


    })
    document.getElementById('table-list').innerHTML = coinsList;

}