var textInput= document.querySelector("#text-input");
var translateButton=document.querySelector("#translate-button");
var outputDiv=document.querySelector("#translate-output"); 
    var serverUrl="https://api.funtranslations.com/translate/chef.json"

function getTranslationUrl(text)
{
    return serverUrl+ "? "+ "text="+text;
}

function LogMyError(err)
{
    console.log("Error Occured",err)
    alert("OOPSS!!Something Went Wrong☹️ Try It Again Next Time..")
}

 translateButton.addEventListener("click",  function clickable()
{
     var inputText=textInput.value;
     console.log("clicked");//to show on console.
     
     fetch(getTranslationUrl(inputText))
     .then(Response=>Response.json())
     .then(json=>
        {
         var trasnslatorText=json.contents.translated;
         outputDiv.innerHTML=trasnslatorText;
         alert("Successfully Translated!!😉");
     })
     .catch( LogMyError)
})
