const booksmodel= require('../Model/books');


exports.addbooks = async function (ctx)
{
try
{
  const {bookname,author,geners,content}= ctx.request.body;

  const data=
   {
    bookname,
    author,
    geners,
    content
  }

  let booksdetail = await new booksmodel(data);
  let response= await booksdetail.save();
  console.log(response);
  ctx.body=response;

}
catch(Error)
{
    ctx.body="Error , While Insert Books Records"
}
}

exports.getbooksdeatils= async function (ctx) //all
{
    try
    {
      const query = ctx.params;
      let booksdetailsresponse = await booksmodel.find({});    
      console.log(booksdetailsresponse);  
      ctx.body= booksdetailsresponse;
    }
    catch(Error)
    {}
}

exports.getbooks= async function (ctx) //get particular book name
{
    try
    {
      const {bookname} = ctx.params;
      console.log("bookname",bookname);
      let booksdetailsresponse = await booksmodel.find({bookname});    
      console.log(booksdetailsresponse);  
      ctx.body= booksdetailsresponse;
    }
    catch(Error)
    {}
}

exports.getauthor= async function (ctx) //get particular author
{
    try
    {
      console.log("Author method received");
      const {author} = ctx.params;
      console.log("bookname",author);
      let booksdetailsresponse = await booksmodel.find({author});    
      console.log(booksdetailsresponse);  
      ctx.body= booksdetailsresponse;
    }
    catch(Error)
    {}
}

exports.updatebook = async function (ctx)
{
    try
    {
      console.log("Update Method Receieved");
      const {content,bookname} = ctx.request.body;
      console.log(content);
      const updateresponse= await booksmodel.findOneAndUpdate({bookname:bookname},{content:content},{new:true});
      console.log(updateresponse);
      ctx.body= updateresponse;

    }
    catch(Error)
    {}
}