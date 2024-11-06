export default function Contact(){
    return(
        <div id='contact'
        className="text-center border-8 bg-slate-600   ">
            <h1 className="mt-24 mb-12">Contact Me</h1>
            <div>
                <div className="text-xl md:text-2xl">
                    <form action="">
                    <legend> Name</legend>
                            <input className="mb-4" type="text" name="name" id="name" />
                    </form>
                    <form action="">
                    <legend> E-mail</legend>
                            <input className="mb-4" type="email"  name="email" id="email" />
                    </form>
                    <form action="">
                        <legend>  Message</legend>
                            <textarea rows={6}  name="msg" id="msg" maxLength={200}></textarea>
                    </form>
                    <form action="">
                        <input  className="px-2 py-1  bg-slate-300 hover:bg-slate-400 duration-200 text-sm  rounded-xl mt-3 mb-4" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    )

}