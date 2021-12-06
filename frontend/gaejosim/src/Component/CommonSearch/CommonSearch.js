import React, { Component } from 'react'
import { ResponsiveRadar } from '@nivo/radar'

import Result from './Result/Result'

import './CommonSearch.css'

// TODO: tag diagram 형성하기

class CommonSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      summonerName: props.summonerName,
      tier: props.tier,
      rank: props.rank,
      mannerPoint: props.mannerPoint,
      tagValues: props.tagValues,
      recentResults: props.recentResults,
      winLose: props.winLose,
      num: props.num,
    }
  }

  render() {
    const winLoseArr = this.state.winLose
    let resultViews = []
    let trollDiagram 
    
    if(typeof this.state.recentResults !== 'undefined') {
      resultViews = this.state.recentResults.map((result, resultIdx) => {
        return <Result key={resultIdx} result={result} winLose={winLoseArr[resultIdx]} />
      })
    }
    if(typeof this.state.tagValues !== 'undefined') {
      let tagArr = this.state.tagValues
      trollDiagram = <ResponsiveRadar
              data={[
                {"tag": "언행", "mannerPoint": tagArr[0],},
                {"tag": "게임폭파", 'mannerPoint': tagArr[1],},
                {"tag": "게임 시작 전", "mannerPoint": tagArr[2],},
                {"tag": "게임 중", "mannerPoint": tagArr[3],},
                {"tag": "기타", "mannerPoint": tagArr[4],},
              ]}
                keys = {[ 'mannerPoint' ]}
                indexBy = "tag"
                valueFormat = ">-.2f"
                // margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
                borderColor = '#fc0174'
                gridLabelOffset = {36}
                gridShape = "linear"
                dotSize = {5}
                // dotColor={{ theme: 'background' }}
                dotBorderWidth = {2}
                colors='#fc0174'
                // blendMode="multiply"
                motionConfig="wobbly"
                legends={[
                  {
                      anchor: 'top-left',
                      direction: 'column',
                      translateX: -50,
                      translateY: -40,
                      itemWidth: 80,
                      itemHeight: 20,
                      itemTextColor: '#999',
                      symbolSize: 10,
                      symbolShape: 'circle',
                      effects: [
                          {
                              on: 'hover',
                              style: {
                                  itemTextColor: '#000'
                              }
                          }
                      ]
                  }
              ]}
            />
    }

    return (
      <div className='boxStyle1'>
        <div className='DiagramBox'>
          {trollDiagram}
        </div>
        <div className = 'SummonerInfo'>
          <div className = 'Summoner'>
            <b className = 'nameStyle1'>{this.state.summonerName}</b>
            {typeof this.state.tier !== 'undefined' && 
            <div className = 'Info'>
              <img
                className = 'tierImg'
                alt = 'tier_img'
                src = {process.env.PUBLIC_URL +`/images/tiers/tier_${this.state.tier}.png`}
              />
              {/* <b className='tier'>{this.state.tier}</b>
              <b className='rank'>{this.state.rank}</b>
              <div className='manner_point_text'>
                MP: {this.state.mannerPoint}
              </div> */}
              <div className = 'tier'>
                <br />
                {this.state.tier}, {this.state.rank} <br />
                MP:{this.state.mannerPoint} <br />
                <br />
                <div className = 'recent_results'>{resultViews}</div>
              </div>  
            </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default CommonSearch
