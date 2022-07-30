function getAll() {
    // List of available squads
    var SQUAD = [
        '3.1.4.2',
        '3.4.1.2',
        '3.4.2.1',
        '3.4.3',
        '3.4.2',
        '4.1.2.1.2',
        '4.1.2.1.2(2)',
        '4.1.3.2',
        '4.1.4.1',
        '4.2.2.2',
        '4.2.3.1',
        '4.2.3.1(2)',
        '4.2.4',
        '4.3.1.2',
        '4.3.2.1',
        '4.3.3',
        '4.3.3(2)',
        '4.3.3(3)',
        '4.3.3(4)',
        '4.3.3(5)',
        '4.4.1.1',
        '4.4.1.1(2)',
        '4.4.2',
        '4.4.2',
        '4.5.1',
        '4.5.1(2)',
        '5.2.1.2',
        '5.2.2.1',
        '5.3.2',
        '5.4.1',
    ]

    // List of available teams
    var TEAM = [ 
    {
        TIME: 'Grêmio', 
        CONTINENT: 'SOUTH_AMERICA',
    },
    {
        TIME: 'Internacional',
        CONTINENT: 'SOUTH_AMERICA',
    },
    {
        TIME: 'Real Madrid',
        CONTINENT: 'Europa',
    }
    ]

    // List of available objective
    var OBJECTIVE = [ 
    {
        OBJETIVO_TITLE: 'Conquistar a Libertadores',
        CONTINENT: 'SOUTH_AMERICA',
    },
    {
        OBJETIVO_TITLE: 'Conquistar a Champions',
        CONTINENT: 'Europa',
    }
    ]

    const randomSQUAD = Math.floor(Math.random() * SQUAD.length)
    const timeFilter = TEAM.filter(time => time.CONTINENT === 'SOUTH_AMERICA')
    const objectiveFilter = OBJECTIVE.filter(objective => objective.CONTINENT === 'SOUTH_AMERICA')
    const randomTEAM = Math.floor(Math.random() * timeFilter.length)
    const randomOBJECTIVE = Math.floor(Math.random() * objectiveFilter.length)


    //console.log(timeFilter[randomTEAM].TIME)
    //console.log(filterObjetive[randomOBJECTIVE].OBJETIVO_TITLE)

    //console.log(randomSQUAD, SQUAD[randomSQUAD])
    //console.log(randomTEAM, TEAM[randomTEAM])
    //console.log(randomOBJECTIVE, OBJECTIVE[randomOBJECTIVE])

    console.log('O seu time selecionado foi o ' + timeFilter[randomTEAM].TIME + ' com o objetivo principal sendo: ' + objectiveFilter[randomOBJECTIVE].OBJETIVO_TITLE + ' e como sugestão utilizar a escalação: ' + randomSQUAD, SQUAD[randomSQUAD])

}