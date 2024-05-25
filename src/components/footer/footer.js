import './footer.css';
import { useContext } from 'react';
import { Context } from '../../context/Context';

const Footer = () =>{
    const {page,setPage} = useContext(Context);
    let newpage = 1;
    const PrevPage =()=>{
        console.log("prewpage");
        newpage = page-1;
        if (newpage > 1){
            console.log("allowed as page = ",newpage);
            document.getElementById("nextbtn").disabled = false;
            setPage(newpage);
            console.log("now page = ",newpage);
        }
        else{
            console.log("button disabled as page = ",newpage);
            document.getElementById("prevbtn").disabled = true;
        }
    }
    const NextPage=()=>{
        console.log("nextpage");
        newpage = page+1;
        if (newpage <3){
            console.log("Allowed next page as page=",newpage);
            document.getElementById("prevbtn").disabled = false;
            setPage(newpage);
            console.log("now page = ",newpage);
        }
        else{
            console.log("buttone disabled as page = ",newpage);
            document.getElementById("nextbtn").disabled = true;
        }
    }
    return(
        <>
            <div className="footer">
                <div className="footer-btn-pair">
                    <button type='button' id='prevbtn' className='footer-btn' onClick={()=>PrevPage()} >&larr; Prev</button>
                    <button type='button' id='nextbtn' className='footer-btn' onClick={()=>NextPage()} >Next &rarr;</button>
                </div>
            </div>
        </>
    )
}
export default Footer;