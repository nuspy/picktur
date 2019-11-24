const posts = [{
 id: "0",
 description: "beautiful landscape",
 imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
 "3919321_1443393332_n.jpg"
 }, {
 id: "1",
 description: "Aliens???",
 imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
 "08323785_735653395_n.jpg"
 }, {
 id: "2",
 description: "On a vacation!",
 imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
 }]




2. Font-URL: 

url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.eot?#iefix") format('embedded-opentype'), url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.woff") format('woff'), url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.ttf") format('truetype'), url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.svg#billabongregular") format('svg'); 



3. CSS Code for Photowall. 

html {
 font-size: 10px;
 font-family: sans-serif;
}
p {
 font-size: 1.6rem;
 line-height: 1.5;
}
h1 {
 font-family: billabong, 'billabongregular';
 text-align: center;
 font-weight: 100;
 font-size: 13rem;
 margin: 2rem 0;
 letter-spacing: -1px;
 color: black;
 text-decoration: none;
}
h1 a {
 color: black;
 text-decoration: none;
}
h1 a:focus {
 outline: 0;
}
@font-face {
 font-family: 'billabongregular';
 src: url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.eot");
 src: url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.eot?#iefix") format('embedded-opentype'), url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.woff") format('woff'), url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.ttf") format('truetype'), url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.svg#billabongregular") format('svg');
 font-weight: normal;
 font-style: normal;
}
body {
 background: offwhite;
}
.photoGrid {
 display: flex;
 flex-wrap: wrap;
 max-width: 1000px;
 margin: 0 auto;
}
.figure {
 flex-basis: calc(33.333% - 4rem);
 border: 1px solid #d3d3d3;
 padding: 2rem;
 flex-grow: 1;
 margin: 0 2rem 2rem 2rem;
}
.figure .single-photo {
 flex-basis: calc(33.333% - 4rem);
 flex-grow: 1;
 flex-shrink: 0;
 margin: 0 2rem 2rem 2rem;
 padding: 2rem;
 border: 1px solid #d3d3d3;
 background: #fff;
 position: relative;
}
.single-photo {
 max-width: 1000px;
 margin: 0 auto;
 display: flex;
 background: #fff;
 border: black;
}
.single-photo .figure {
 box-shadow: none;
 margin: 0 2rem 0 0;
 border: 0;
 padding: 0;
 flex: 1 0 60%;
 max-width: 60%;
}
.single-photo .comments {
 flex: 1 0 40%;
 max-width: 40%;
}
.single-photo .photo {
 width: 100%;
 margin: 0;
}
.photo {
 width: calc(100% + 4rem);
 margin-left: -2rem;
 margin-top: -2rem;
 max-width: none;
}
.comment{
 width: 100%
}
.comment p {
 border-bottom: 1px solid #d3d3d3;
 padding: 0.5rem 0;
}
.comment-form input,
.comment-form textarea {
 width: 100%;
 border: 0;
 font-size: 1.3rem;
 padding: 1rem 0;
 border-bottom: 1px solid #d3d3d3;
 outline: none;
 resize: vertical;
}
.addIcon {
 background: url("https://image.flaticon.com/icons/svg/60/60740.svg") center no-repeat;
 background-size: contain;
 padding: 40px;
 display: table;
 margin: 20px auto;
 border: none;
}
.button-container {
 margin: 0 auto;
 display: flex;
 align-items: center;
 justify-content: center;
}
button, .button {
 border: 2px solid #f2f2f2;
 background: none;
 flex-basis: 48%;
 display: inline-block;
 line-height: 2;
 text-decoration: none;
 padding: 5px;
 text-align: center;
 font-size: 15px;
 color: red;
 transition: all 0.2s;
 box-sizing: padding-box;
 
}
button:hover,.button:hover, button:focus, .button:focus {
 border-color: #00f;
 outline: 0;
}
.speech-bubble {
 background: url("https://d30y9cdsu7xlg0.cloudfront.net/png/51904-200.png") center no-repeat;
 background-size: contain;
 padding: 10px;
 margin: 5px;
 display: inline-block;
 border: none;
 position: relative;
}
.comment-count {
 margin: 0 auto;
 display: flex;
 align-items: center;
 justify-content: center;
 color: black
}
.form {
 width: 360px;
 padding: 0 0 0;
 margin: auto;
}
 
.form input {
 font-family: sans-serif;
 outline: 0;
 background: #f2f2f2;
 width: 100%;
 border: 0;
 margin: 0 0 15px;
 padding: 15px;
 box-sizing: border-box;
 font-size: 14px;
 }
.form button {
 font-family: "Roboto", sans-serif;
 text-transform: uppercase;
 outline: 0;
 background:#065784;
 width: 100%;
 border: 0;
 padding: 15px;
 color: #FFFFFF;
 font-size: 14px;
 -webkit-transition: all 0.3 ease;
 transition: all 0.3 ease;
 cursor: pointer;
 }
 .form button:hover,.form button:active,.form button:focus {
 background: #7B8589;
}
.loader {
 height: 20%;
 width: 100%;
 display: flex;
 position: fixed;
 align-items: center;
 justify-content: center;
 font-size: 28pt;
}