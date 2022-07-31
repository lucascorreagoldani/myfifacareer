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
        TEAM_NAME: 'Grêmio', 
        CONTINENT: 'SOUTH_AMERICA',
    },
    {
        TEAM_NAME: 'Internacional',
        CONTINENT: 'SOUTH_AMERICA',
    },
    {
        TEAM_NAME: 'Real Madrid',
        CONTINENT: 'EUROPE',
    },
    ]

    // List of available objective
    var OBJECTIVE = [ 
    {
        OBJETIVO_TITLE: 'Conquistar a Libertadores',
        CONTINENT: 'SOUTH_AMERICA',
    },
    {
        OBJETIVO_TITLE: 'Conquistar a Champions',
        CONTINENT: 'EUROPE',
    },
    ]

    const teamFilter = TEAM.filter(team_name => team_name.CONTINENT === 'SOUTH_AMERICA')
    const objectiveFilter = OBJECTIVE.filter(objective => objective.CONTINENT === 'SOUTH_AMERICA')

    const randomSQUAD = Math.floor(Math.random() * SQUAD.length)
    const randomTEAM = Math.floor(Math.random() * teamFilter.length)
    const randomOBJECTIVE = Math.floor(Math.random() * objectiveFilter.length)

    alert('O seu time selecionado foi o ' + teamFilter[randomTEAM].TEAM_NAME + ' com o objetivo principal sendo: ' + objectiveFilter[randomOBJECTIVE].OBJETIVO_TITLE + ' e como sugestão utilizar a escalação: ' + randomSQUAD, SQUAD[randomSQUAD])
    console.log('O seu time selecionado foi o ' + teamFilter[randomTEAM].TEAM_NAME + ' com o objetivo principal sendo: ' + objectiveFilter[randomOBJECTIVE].OBJETIVO_TITLE + ' e como sugestão utilizar a escalação: ' + randomSQUAD, SQUAD[randomSQUAD])

}