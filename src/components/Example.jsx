import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from '../../lib/index';

const otherFontTheme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#6e48aa',
  headerFontColor: '#fff',
  headerFontSize: '16px',
  botBubbleColor: '#6E48AA',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const steps = [
  {
      id: '1',
      message: 'What is your name?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}, nice to meet you!',
      trigger: '4',
    },
    {
      id: '4',
      message: 'We have some activities today and we are going to spend some time learning about breakfast! Ready to start with your lessons today?',
      trigger: '5',
    },
    {
      id: '5',
      user: true,
      validator: (value) => {
        if (value!='yes') {
          return 'hard work is the secret to success';
        }
        return true;
      },
      trigger: '6',
    },
    {
      id: '6',
      message: 'Good',
      trigger: '7',
    },
    {
      id: '7',
      component: (
       <div>
         <p> This is a breakfast </p>
         <img src='http://35.200.133.242:9999/language/17155-200.png'></img>
       </div>
      ),
      trigger: '8',
    },
    {
            id: '8',
            message: 'Did you get the meaning of "breakfast"?',
            trigger: '9',
    },
    {
        id: '9',
        options: [
          { value: 1, label: 'Yes', trigger: '10' },
          { value: 2, label: 'No', trigger: '7' },
        ],
    },
    {
            id: '10',
            message: 'Now let us look at a phrase around breakfast',
            trigger: '11',
    },
    {
            id: '11',
            component: (
             <div>
               <p>Did you have your breakfast?</p>
               <img src='http://35.200.133.242:9999/language/47960-two-men-talking.png'></img>
             </div>
            ),
            options: [
              { value: 1, label: 'Yes, I had my breakfast', trigger: '12' },
              { value: 2, label: 'I had idli for my breakfast', trigger: '12' },
              { value: 3, label: 'I like coffee with my breakfast', trigger: '12' },
              { value: 3, label: 'I want breakfast to be hot', trigger: '12' },
              { value: 3, label: 'I want my breakfast to be fresh', trigger: '12' },
            ],
    },
    {
            id: '12',
            message: 'Good',
            end: true,
    },
];


const ThemedExample = () => (
  <ThemeProvider theme={otherFontTheme}>
    <ChatBot
      headerTitle="Speech Recognition"
      recognitionEnable={true}
      steps={steps} />
  </ThemeProvider>
);

export default ThemedExample;
