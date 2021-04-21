let store = {
    questions: [
        {
            qNumber: 'Question 1:',
            question: ' how to hide any element from the page?',
            var1: 'div { display:not: visible; }',
            var2: 'div { display: none; }',
            var3: 'div { display: hide; }',
            value1: 'no',
            value2: 'yes',
            value3: 'no',
            path: '/1',
            link: '/2',
            next: 'NEXT'
        },
        {
            qNumber: 'Question 2:',
            question: ' what does the "position: fixed" property do?',
            var1: 'Positions an element on top of others',
            var2: 'Fixes a group of elements together',
            var3: 'A fixed position element is positioned relative to the viewport, or the browser window itself',
            value1: 'no',
            value2: 'no',
            value3: 'yes',
            path: '/2',
            link: '/3',
            next: 'NEXT'
        },
        {
            qNumber: 'Question 3:',
            question: ' how to set the width of a block element to the entire area?',
            var1: 'width: block',
            var2: 'width: 100%',
            var3: 'margin: auto',
            value1: 'no',
            value2: 'yes',
            value3: 'no',
            path: '/3',
            link: '/4',
            next: 'NEXT'
        },
        {
            qNumber: 'Question 4:',
            question: ' how to override the default styles of list items (li elemetns)?',
            var1: 'list-styles: none',
            var2: 'list-style: none',
            var3: 'li-style: none',
            value1: 'no',
            value2: 'yes',
            value3: 'no',
            path: '/4',
            link: '/5',
            next: 'NEXT'
        },
        {
            qNumber: 'Question 5:',
            question: ' find the syntax error:',
            var1: 'background: url{img/pic.jpg}',
            var2: 'background-position: 0% 0% 0%',
            var3: 'background-repeat: repeat-x',
            value1: 'yes',
            value2: 'no',
            value3: 'no',
            path: '/5',
            link: '/6',
            next: 'NEXT'
        },
        {
            qNumber: 'Question 6:',
            question: ' which property makes all letters capitalized?',
            var1: 'capitalize',
            var2: 'to-uppercase',
            var3: 'uppercase',
            value1: 'no',
            value2: 'no',
            value3: 'yes',
            path: '/6',
            link: '/7',
            next: 'NEXT'
        },
        {
            qNumber: 'Question 7:',
            question: ' how to correct add padding for a text block?',
            var1: 'padding: 1em',
            var2: 'padding-auto: 5px',
            var3: 'padding: auto (0px 100px)',
            value1: 'yes',
            value2: 'no',
            value3: 'no',
            path: '/7',
            link: '/8',
            next: 'NEXT'
        },
        {
            qNumber: 'Question 8:',
            question: ' what the following property does: "float: left"?',
            var1: 'Aligns an element to the left, and all other elements, such as text, flow to the right',
            var2: 'Aligns all elements to the left',
            var3: 'Aligns a parent block to the left, and all other childs flow to the right',
            value1: 'yes',
            value2: 'no',
            value3: 'no',
            path: '/8',
            link: '/result',
            next: 'FINISH'
        }
    ]
}

export default store