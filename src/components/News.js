import React, { Component } from 'react'
import NewItem from './NewsItem'

export class News extends Component {
    article = [
        {
            "source": {
                "id": "talksport",
                "name": "TalkSport"
            },
            "author": "Oliver Dawnay",
            "title": "Steve Harmison fears ‘this is the end of Test match cricket’ as India accused of pulling out fifth Test aga...",
            "description": "",
            "url": "https://talksport.com/sport/cricket/940894/steve-harmison-england-india-fifth-test-cancelled-cricket/",
            "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2021/09/GettyImages-1196509885-1.jpg?strip=all&quality=100&w=1200&h=800&crop=1",
            "publishedAt": "2021-09-10T09:41:21Z",
            "content": "Steve Harmison fears the cancelled fifth Test between England and India is ‘the beginning of the end for Test cricket.’\r\nThe series decider at Old Trafford was abandoned on the morning of the match, … [+3889 chars]"
        },
        {
            "source": {
                "id": "abc-news-au",
                "name": "ABC News (AU)"
            },
            "author": "ABC News",
            "title": "Final England-India cricket Test called off after COVID-19 outbreak in Indian camp",
            "description": "The Old Trafford Test is cancelled after India confirms it won't be able to field a team due to fears of a growing number of positive cases inside the touring party.",
            "url": "http://www.abc.net.au/news/2021-09-10/covid-19-fifth-england-india-cricket-test-cancelled/100453610",
            "urlToImage": "https://live-production.wcms.abc-cdn.net.au/2bacc2d59026040cb6e311ae709ce2f4?impolicy=wcms_crop_resize&cropH=1419&cropW=2523&xPos=2471&yPos=1914&width=862&height=485",
            "publishedAt": "2021-09-10T08:39:00Z",
            "content": "The fifth and final Test of the series between England and India in Manchester has been cancelled following a coronavirus outbreak in the Indian camp.\r\nThe cancellation of the Test was confirmed bare… [+832 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ]
    constructor() {
        super()
        this.state = {
            articles: this.article,
            loading: false
        }
    }
    render() {
        return (

            <div className="container my-3">
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-3" key={element.url}>
                            <NewItem title={element.title} description={element.description} imgUrl={element.urlToImage} idUrl={element.url} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News
