import styled from 'styled-components'


export const RightNav = styled.nav`
    top:0;
    right: 0;
    width: 350px;
    height: 100vh;
    position:fixed;
    background-color:#fff;
    color:#707070;
    

`

export const RightContainer = styled.div`
   display: flex;
   flex-direction:column;
   align-items: center;

   .user{
       display: flex;
       align-items: center;
       margin:25px;

       h2{
           margin:0 15px;
       }

       img{
           border-radius:50%;
            width: 10%;
       }

      
   }

    .content-one{
        background-color:#000;
        height: 300px;
        width: 300px;
        border-radius:5%;
        background-color:#808BEF;
    }

    .calendar{
        height: 300px;
        width: 300px;
        margin:1rem;
        border:1px solid red;
        border-radius:5%;

    }
`
