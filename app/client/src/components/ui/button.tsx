

export const AuthBtn = () => {

    return(

        <div className="flex gap-8 text-white">
            <button className="bg-violet-700 rounded-md p-3 font-semibold hover:opacity-75">Login</button>
            <button className="bg-slate-800 rounded-md p-3 font-semibold hover:opacity-75">SignUp</button>
        </div>
    )
}

export const ServicesBtn = ({ btnText }: any) => {
    return <button type="submit" 
                   className="w-2/5 bg-violet-700 p-3 rounded-md text-white font-semibold">
                  { btnText }
            </button>
            
}

export const DataDisplayBtn = () => {

    const displayBtn = [
        { name: 'Copy', classname: 'text-violet-700 font-semibold', onclickFunction: 'copyFunction here' },
        { name: 'Clicks', classname: 'text-slate-500 font-semibold', onclickFunction: 'ClicksFunction here' },
        { name: 'Delete', classname: 'text-red-700 font-semibold', onclickFunction: 'DeleteFunction here' }
    ]

    return(

        <div className="flex gap-5">
            {

              displayBtn.map((data: any) => (

                <button onClick={data.onclickFunction} className={data.classname} > 
                    {data.name} 
                </button>

              ))

            }
        </div>
    )
}
