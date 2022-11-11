import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='flex justify-center'> 

<div className='md:w-1/2 mx-4 md:mx-0'>
<div className='my-12'>
 <h1 className='text-primary text-3xl'>Difference between SQL and NoSQL</h1>
<p className=' mt-4 text-lg' id='sidetxt'>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>   
</div>

<div className='my-12'>
 <h1 className='text-primary text-3xl'>What is JWT, and how does it work?</h1>
<p className=' text-lg' id='sidetxt'>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>
  
<p className=' text-lg' id='sidetxt'>Information Exchange: JWTs are a good way of securely transmitting information between parties because they can be signed, which means you can be sure that the senders are who they say they are. Additionally, the structure of a JWT allows you to verify that the content hasn't been tampered with.</p>
</div>

<div className='my-12'>
 <h1 className='text-primary text-3xl'>What is the difference between javascript and NodeJS?</h1>
<p className=' mt-4 text-lg' id='sidetxt'>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>   
</div>

<div className='my-12'>
 <h1 className='text-primary text-3xl'>How does NodeJS handle multiple requests at the same time?</h1>
<p className=' text-lg' id='sidetxt'>We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded. 

How NodeJS handle multiple client requests?

NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. 

If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>   
</div>
</div>


</div>
        </div>
    );
};

export default Blog;