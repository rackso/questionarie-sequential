const fake = {
    questions: [
      {
        type: 'lineal',
        hash: '1',
        text: 'enunciado lineal',
        minvalue: 0,
        maxvalue: 1000,
        maxtime: 20
      },
      {
        type: 'sphere',
        hash: '1',
        text: 'enunciado sphere',
        minvaluex: 0,
        maxvaluex: 1000,
        minvaluey: 0,
        maxvaluey: 1000
      },
      {
        type: 'single',
        hash: '1',
        text: 'enunciado single',
        responses: [
          {
            hash: 'singleresponse1',
            text: 'single response 1'
          },
          {
            hash: 'singleresponse2',
            text: 'single response 2'
          },
          {
            hash: 'singleresponse3',
            text: 'single response 3'
          },
          {
            hash: 'singleresponse4',
            text: 'single response 4'
          }
        ]
      },
      {
        type: 'multiple',
        hash: '1',
        text: 'enunciado multiple',
        responses: [
          {
            hash: 'singleresponse1',
            text: 'multiple response 1'
          },
          {
            hash: 'singleresponse2',
            text: 'multiple response 2'
          },
          {
            hash: 'singleresponse3',
            text: 'multiple response 3'
          },
          {
            hash: 'singleresponse4',
            text: 'multiple response 4'
          }
        ]
      },
      {
        type: 'sort',
        hash: '1',
        text: 'enunciado sort',
        elements: [
          {
            hash: 'singleresponse1',
            text: 'sort 1'
          },
          {
            hash: 'singleresponse2',
            text: 'sort 2'
          },
          {
            hash: 'singleresponse3',
            text: 'sort 3'
          },
          {
            hash: 'singleresponse4',
            text: 'sort 4'
          }
        ]
      },
      {
        type: 'match',
        hash: '1',
        text: 'enunciado match',
        elements: [
          {
            hash: 'singleresponse1',
            text: 'match 1'
          },
          {
            hash: 'singleresponse2',
            text: 'match 2'
          },
          {
            hash: 'singleresponse3',
            text: 'match 3'
          },
          {
            hash: 'singleresponse4',
            text: 'match 4'
          },
          {
            hash: 'singleresponse1',
            text: 'match 5'
          },
          {
            hash: 'singleresponse2',
            text: 'match 6'
          },
          {
            hash: 'singleresponse3',
            text: 'match 7'
          },
          {
            hash: 'singleresponse4',
            text: 'match 8'
          }
        ]
      }
    ]
  }

export default fake
