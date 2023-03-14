const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      subject: event.target.subject.value,
      message: event.target.message.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
    };
  
    try {
      const response = await axios.post(process.env.API_ENDPOINT, formData, {
        headers: { Authorization: `Bearer ${process.env.API_KEY}` },
      });
      console.log('response', response.data);
    } catch (error) {
      console.error(error);
    }
  };




export default function handler(req,res){
    const body = req.body;

    console.log('body', body);

    if (!body.firstName ||  !body.lastName ){
return res.status(400).json{({ data: ' first or last name not found'})}
    }
    res.status(200).json({data: `${body.firstName} ${body.lastName}`})
}
