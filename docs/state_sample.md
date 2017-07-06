# State Sample
## initial
{}

## After Some UI
{ forms:{
    1: {
      id: 1
      formType: head
      question: "Do you own a car?"
      type: "Yes/No"
      answer: "Yes"
      sub_form: [2]
    }
    2: {
      id: 2
      formType: sub
      condition: "Yes"
      question: "What is your car’s model?"
      type: "Text"
      answer: "Ford"
      sub_form: [3]
    }  
    3: {
      id: 1
      formType: sub
      condition: "Ford"
      question: "How many wheels on your Ford?"
      type: "Number"
      answer: "4"
      sub_form: [4]
    }
    4: {
      id: 1
      formType: sub
      condition: "Greater than 4"
      question: "Is your Ford road legal?"
      type: "Yes/No"
      answer: "No"
      sub_form: [4]
    }
    5: {
        id: 5
        formType: head
        question: "What year was your building built?"
        type: "Number"
        answer: "1997"
        sub_form: []
    }  
    6: {
        id: 6
        formType: head
        question: "What’s your company name?"
        type: "Text"
        answer: "Frank's Car Dealer"
        sub_form: []
    }  
  }
}
