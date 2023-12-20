import { useMutation, useQueryClient } from "react-query";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faEye, faTrashCan, faQrcode } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faXTwitter } from '@fortawesome/free-brands-svg-icons';

import { deleteShortUrl} from "../../services/httpRequest/shorturl/delete";
import { deleteQrCode } from "../../services/httpRequest/qrcode/delete";
import { downloadQrCode } from "../../services/httpRequest/qrcode/download";

import { SetselectedQrCodeOption } from "../../utils/interface/qrcodes";


import React, { useRef, useEffect } from 'react';
import Swal from 'sweetalert2';



function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}
  

export const NavBtn = () => {

    const btnData = [
        { name: 'Support Us', current: false },
        { name: 'FAQ', current: false },
    ]

    return(

        <div className="flex gap-10 text-slate-800">
            {
                btnData.map((data) => (

                    <button key={data.name} className={
                        classNames(
                            data.current ? 'opacity-75' : 'font-bold text-xl hover:opacity-75'
                        )
                    }>
  
                    { data.name }

                    </button>
                ))
            }

        </div>
    )
}


export const ServicesBtn = ({ btnText, Submitting }: any) => {

    return <button type="submit" 
                   className="w-2/5 bg-violet-700 p-3 rounded-md text-white font-semibold"
                   disabled={Submitting} 
                   
                   >

                  { btnText }

            </button>
            
}


export const DataDisplayBtn = ( { url_id, clicks, urlToCopy } : any) => {

    const queryClient = useQueryClient();


    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(`localhost:5000/${urlToCopy}`);
    }


    const deleteMutation = useMutation(deleteShortUrl, {
        onSuccess: () => {
          queryClient.invalidateQueries('shorturls')
        },
    });


    const numberOfClicks = () => {
        Swal.fire({
          position: "top-end",
          title: "Your URL Total Clicks",
          html: `<div class="text-6xl font-bold p-3">${clicks}</div>`,
          showConfirmButton: true,
        });
      };


    const displayBtn = [
        { 
            name: 'Copy', 
            classname: 'text-violet-700  font-semibold hover:opacity-75', 
            onclickFunction: copyToClipboard 
        },

        { 
            name: 'Clicks', 
            classname: 'text-slate-500 font-semibold hover:opacity-75', 
            onclickFunction: numberOfClicks
        },

        { 
            name: 'Delete', 
            classname: 'text-red-700 font-semibold hover:opacity-75', 
            onclickFunction: () => deleteMutation.mutate(url_id) 
        }
    ]

    return(

        <div className="flex gap-5">
            {

              displayBtn.map((data: any) => (

                <button key={data.name} onClick={async () => await data.onclickFunction()} className={data.classname} > 
                    {data.name} 
                </button>

              ))

            }
        </div>
    )
}





export const OptionsBtn: React.FC<SetselectedQrCodeOption> = ({ setselectedQrCodeOption }) => {

    const buttonRef = useRef<any>(null);

    const handleFirstButtonClick = () => {
      buttonRef.current.click();
      setselectedQrCodeOption('WebURL')
    };

    useEffect(() => {
        // Trigger the click of the first button after component mounts
        handleFirstButtonClick();
      }, []); // Empty dependency array ensures this effect runs only once after initial render
    
      const optionsBtnArray = [
        {
          name: 'URL',
          icon: <FontAwesomeIcon icon={faLink} />,
          setselectedQrCodeOption: handleFirstButtonClick, // Pass the function directly
        },
        {
          name: 'Facebook',
          icon: <FontAwesomeIcon icon={faFacebook} />,
          setselectedQrCodeOption: () => setselectedQrCodeOption('Facebook'),
        },
        {
          name: 'Twitter',
          icon: <FontAwesomeIcon icon={faXTwitter} />,
          setselectedQrCodeOption: () => setselectedQrCodeOption('Twitter'),
        },
      ];  

    return(

        <>
            {
              optionsBtnArray.map((data) => (

                <button 
                   ref={buttonRef}
                   onClick={() => data.setselectedQrCodeOption()}
                   key={data.name} 
                   className={
                    classNames('bg-violet-700 rounded-md p-3 font-semibold text-white hover:opacity-75')
                   }> 
                  {data.icon} {data.name} 
                
                </button>

              ))
            }
        </>
    )
}



export const GenerateQrBtn = ({ Submitting }: any) => {

    return(

        <button 
            type="submit"
            disabled={Submitting}
            className="w-full bg-violet-700 p-3 rounded-md text-white font-semibold mt-5 hover:opacity-75">
               Generate
        </button>
    )
}


export const QrCodeDataDisplayActionsBtn = ({ openModal, data }: any) => {

    const queryClient = useQueryClient();

    
    const deleteMutation = useMutation(deleteQrCode, {
        onSuccess: () => {
          queryClient.invalidateQueries('qrCodes')
        },
    });
    

    const qrCodeActionsBtnArray = [
        {icon: <FontAwesomeIcon icon={faEye}/>, name: 'preview', onclickFunction: () => openModal(data.qrCodeLongURL, data.qrCodeShortURL, data.qrCode, data._id)},
        {icon: <FontAwesomeIcon icon={faTrashCan} />, name: 'delete',  onclickFunction: async () => deleteMutation.mutate(data._id)},
    ]  

    
    return(

        <div className="flex gap-5">

            {

              qrCodeActionsBtnArray.map((data: any) => (

                <button onClick={ async () => await data.onclickFunction() } key={data.name} className={
                    classNames('text-xl hover:opacity-75')
                }> 
                  {data.icon} 
                
                </button>

              ))
            }

        </div>
    )

}

export const QrCodeDownloadQrFormatBtn = ({ qrcode_id }: any ) => {

    const downloadQrCodeVia = async (format: string) => await downloadQrCode(format, qrcode_id);


    const formatBtn = [
        {name: 'PNG', icon: <FontAwesomeIcon icon={faQrcode}/>, onclickFunction: () => downloadQrCodeVia('png')},
        {name: 'JPEG', icon: <FontAwesomeIcon icon={faQrcode}/>, onclickFunction: () => downloadQrCodeVia('jpeg')},
        {name: 'WEBP', icon: <FontAwesomeIcon icon={faQrcode}/>, onclickFunction: () => downloadQrCodeVia('webp')}
    ]

    return(

    
        <div className="flex gap-4 mt-3">

            {
                formatBtn.map((data) => (

                    <button 
                    type="button"
                    onClick={() => data.onclickFunction()}
                    key={data.name}
                    className={classNames('bg-violet-700 w-[60%] p-3 rounded-md text-white font-bold hover:opacity-75')}
                
                    > 
                       {data.icon} {data.name} 
                    </button>
                ))
            }

        </div>

    )
}