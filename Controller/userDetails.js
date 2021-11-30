const userModel=require('../Model/user');


exports.adduserdeatils = async function (ctx)
{
try
{
  const {username,password} =ctx.request.body;

  const data = {username,password}; 

  let userdeatils = await new userModel(data);
  let userdetailsresponse = await userdeatils.save();
  console.log(userdetailsresponse);  
  ctx.body= userdetailsresponse;
}
  catch(error)
{
}
}

exports.getuserdeatils= async function (ctx)
{
    try
    {
      const query = ctx.params;
      let userdetailsresponse = await userModel.find({});    
      console.log(userdetailsresponse);  
      ctx.body= userdetailsresponse;
    }
    catch(Error)
    {}
}