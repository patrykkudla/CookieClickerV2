
# Project Title

# CookieClickerV2
CookieClicker V2

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Browser
```
#Test done

High cookie value test - works (number with at least 15 zeros) 

#Code explain 
  //display cookies and CPS
         setInterval(updateDisplay, 100);
     
         function updateDisplay() {       
              
             if (cookieValue < 1000) {
                 document.getElementById('counter').textContent = Math.floor(cookieValue) + ' Cookies' ;
             }
             else {
                 document.getElementById('counter').textContent = (cookieValue.toLocaleString('en',{maximumFractionDigits:0})) + ' Cookies' ;
             };
             
             document.getElementById('cookiesPerSecond').textContent = ("per second " + (cookiesPerSecond*10).toLocaleString('en',{maximumFractionDigits:1}));
                              
         }
       });
## Authors

Kudła Patryk


