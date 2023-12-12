
import logoo from "../../assets/logo.png"
import "./One.css"
export default function One() {
  return <>

{/* start */}
<div className="container-flued">
<br></br>
  <div className="row grid text-center">
    <div className="col">

    <button type="button" className="btn" style={{borderRadius:"10px",
backgroundColor:"var(--c-5-a-565, #C5A565)",
boxShadow:"0px 2px 2px 0px #C5A565",color:"white",paddingRight:"20px",paddingLeft:"20px"}}>تقرير أداء الحلقه </button>
    </div>
    <div className="col">
    <button type="button" className="btn" style={{borderRadius:"10px",
backgroundColor:"#143C4F",
boxShadow:"0px 1px 1px 0px #143C4F",color:"white",paddingRight:"20px",paddingLeft:"20px"}}>تسجيل التقرير اليومى </button>
    </div>
    <div className="col">
    
    </div>
    <div className="col">
     
    </div>
    <div className="col row">
    <div className="col-8">
     <p style={{borderLeft:"1px solid black"}}><span style={{color:"#C5A565"}}>أكاديمية</span><span style={{color:"#143C4F"}} > إتقان الإلكترونية</span></p>
     </div>
     <div className="col-4">
     <img src={logoo}
      style={{
height:"56.725px",borderRadius:"50%",width:"50px"}}/>
     </div>
    </div>
  </div>

<br></br>


  <div className="row rid text-center" style={{backgroundColor:"#F1EFFD",padding:"13px"}}>
    <div className="col-4">

    <button type="button" className="btn " style={{borderRadius:"12px",
border:"1px solid var(--Style, #143C4F)",
background:"var(--ffffff, #FFF)",
boxShadow:"0px 2px 2px 0px #143C4F"}} ><p>المتبقى للختمه</p><p style={{fontSize:"27px",
fontWeight:"400",marginTop:"-7px",marginBottom:"-5px"}}>0</p></button>
</div>
   
    <div className="col-4">
<p style={{fontSize:"20px",

fontWeight:"500"}}>مرحبا بك يا صاحب القرآن</p>
<p style={{color:"#C5A565",fontSize:"18px",
fontWeight:"400"}}>بسام عبدالرحمن صالح </p>
<button type="button" className="btn" style={{borderRadius:"12px",
border:"1px solid var(--Style, #143C4F)",
background:"#143C4F",
boxShadow:"0px 2px 2px 0px #143C4F",color:"white",paddingRight:"35px",paddingLeft:"35px"}}>عرض تقرير الشهر الماضى</button>
  
    </div>
    <div className="col-4">
    <button type="button" className="btn "  style={{borderRadius:"12px",
border:"1px solid var(--Style, #143C4F)",
background:"var(--ffffff, #FFF)",
boxShadow:"0px 2px 2px 0px #143C4F"}}><p>الالتزام بالختمه</p><p style={{fontSize:"27px",
fontWeight:"400",marginTop:"-7px",marginBottom:"-5px"}}>0</p></button>
    </div>
  </div>

  <br></br>

  <p style={{color:"white",backgroundColor:"#0D7858",
height: "75px",textAlign:"center",
fontSize: "18px",
fontWeight:"350",
lineHeight:"2"
}}>يوجد رسوم اشتراك شهرية مقدارها ٢٥ ريالا، تدفع بداية 
كل شهر ميلادي، تفضل بدفعها مشكورا بالضغط هنا
<br></br>
إذا كنت دفعت رسوم هذا الشهر أو كنت لا تستطيع الدفع تجاوز هذه الرسالة وشكرا لك</p>
 

  <div className="row grid text-center">
    <div className="col-6">

    <button type="button" className="btn btn-sm" style={{backgroundColor:"#143C4F",color:"white",height: "45px",borderRadius:"15px",boxShadow:"0px 2px 2px 0px #C5A565",paddingLeft:"23%",paddingRight:"23%"}}><i className="fa-solid fa-angle-left"></i> مقرأة إتقان الإلكترونية </button>
    </div>
    <div className="col-6">
    <button  type="button" className="btn btn-sm" style={{backgroundColor:"#C5A565",color:"white",height: "45px",borderRadius:"15px",boxShadow: "0px 2px 2px 0px #143C4F",paddingLeft:"10%",paddingRight:"10%"}}> <i className="fa-solid fa-angle-left"></i> تحديات حفظ سورة البقرة وآل عمران والنساء وجزء عم </button>
    </div>
 
  </div>

<p style={{
fontSize: "30px",
fontWeight:"800",
height:"53px",
textAlign:"center"
}}>التفاصيل </p>
<div>

<table className="table table-bordered " style={{border:"black",textAlign:"center"}}>


  <thead>
    <tr>
      <th scope="col">جروب الواتس</th>
      <th scope="col">طريقة التسميع</th>
      <th scope="col">موعد بدأ الحلقة</th>
      <th scope="col">الحلقة والموعد</th>
      <th scope="col"> البرنامج</th>
      <th scope="col">المشرف</th>
      <th scope="col">اسم المعلم </th>
      <th scope="col">اسم الطالب </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{backgroundColor:"#F1EFFD",color:"#27AE60"}}><i className="fa-brands fa-whatsapp" style={{color:"#27AE60"}}></i> اضغط للانضمام</td>
      <td style={{backgroundColor:"#F1EFFD"}}>زوم ومقطع صوتي</td>
      <td style={{backgroundColor:"#F1EFFD"}}>5:30-6 مساء<br></br>
 بتوقيت مكة</td>
      <td style={{backgroundColor:"#F1EFFD"}}>01<br></br>
10 مساء</td>
      <td style={{backgroundColor:"#F1EFFD"}}>برنامج روضة إتقان داخلي <br></br>A11</td>
      <td style={{backgroundColor:"#F1EFFD"}}><i className="fa-brands fa-whatsapp" style={{color:"#27AE60"}}></i> سامي عز الدين العوض </td>
      <td style={{backgroundColor:"#F1EFFD"}}><i className="fa-brands fa-whatsapp" style={{color:"#27AE60"}}></i> أ/عبدالعزيز المكي</td>
      <td style={{backgroundColor:"#F1EFFD"}}>بسام عبد الرحمن صالح</td>
    </tr>
   
  </tbody>
</table>
</div>

<p style={{color:"white",backgroundColor:"#0D7858",
height: "70px",textAlign:"center",
fontSize: "18px",
fontWeight:"350",
lineHeight:"2"
}}>رفع التقرير يعني مواظبة الطالب في الحضور وتحفيز له لمعرفة إنجازه وتقدمه في الحفظ
وهو يعادل دفتر الحضور والغياب في المدرسة</p>




<div style={{backgroundColor:"#F1EFFD"}}>

<p style={{
fontSize: "30px",
fontWeight:"800",
height:"53px",
textAlign:"center"
}}>التقارير اليومية الأخيرة</p>

<div className="row">
    <div className="col-3">
    <table className="table table-bordered "style={{border:"black",textAlign:"center"}} >
<thead >
  <tr>
    <th  colSpan={2} style={{backgroundColor:"#C5A565",color:"white",textAlign:"center"}}>السبت 25-11-2023</th>
  </tr>
</thead>
<tbody>

  <tr>
    <td>1</td>
    <td>أوجه الحفظ</td>
  </tr>
 
  <tr>
    <td>1</td>
    <td>أوجه المراجعه </td>
  </tr>
  <tr>
    <td>100</td>
    <td>الدرجه </td>
  </tr>
</tbody>
</table>
    </div>


    <div className="col-3">
    <table className="table table-bordered" style={{border:"black",textAlign:"center"}}>
<thead>
  <tr>
    <th colSpan={2} style={{backgroundColor:"#C5A565",color:"white",textAlign:"center"}}>الجمعة 24-11-2023</th>
  </tr>
</thead>
<tbody>

  <tr>
    <td>1</td>
    <td>أوجه الحفظ</td>
  </tr>
 
  <tr>
    <td>1</td>
    <td>أوجه المراجعه </td>
  </tr>
  <tr>
    <td>100</td>
    <td>الدرجه </td>
  </tr>
</tbody>
</table>
    </div>



    <div className="col-3">
    <table className="table table-bordered" style={{border:"black",textAlign:"center"}}>
<thead>
  <tr>
    <th colSpan={2} style={{backgroundColor:"#C5A565",color:"white",textAlign:"center"}}>الخميس 23-11-2023</th>
  </tr>
</thead>
<tbody>

  <tr>
    <td>1</td>
    <td>أوجه الحفظ</td>
  </tr>
 
  <tr>
    <td>1</td>
    <td>أوجه المراجعه </td>
  </tr>
  <tr>
    <td>100</td>
    <td>الدرجه </td>
  </tr>
</tbody>
</table>
    </div>


    <div className="col-3">
    <table className="table table-bordered"style={{border:"black",textAlign:"center"}}>
<thead>
  <tr>
    <th colSpan={2} style={{backgroundColor:"#C5A565",color:"white",textAlign:"center"}}>الأربعاء 22-11-2023</th>
  </tr>
</thead>
<tbody>

  <tr>
    <td>1</td>
    <td>أوجه الحفظ</td>
  </tr>
 
  <tr>
    <td>1</td>
    <td>أوجه المراجعه </td>
  </tr>
  <tr>
    <td>100</td>
    <td>الدرجه </td>
  </tr>
</tbody>
</table>
    </div>




  </div>







<div className="row">
    <div className="col-3">
 
    </div>


    <div className="col-3">
    <table className="table table-bordered" style={{border:"black",textAlign:"center"}}>
<thead>
  <tr>
    <th colSpan={2} style={{backgroundColor:"#BFBFBF",color:"white",textAlign:"center"}}>الثلاثاء 28-11-2023</th>
  </tr>
</thead>
<tbody>

  <tr>
    <td>-</td>
    <td>أوجه الحفظ</td>
  </tr>
 
  <tr>
    <td>-</td>
    <td>أوجه المراجعه </td>
  </tr>
  <tr>
    <td>-</td>
    <td>الدرجه </td>
  </tr>
</tbody>
</table>
    </div>



    <div className="col-3">
    <table className="table table-bordered" style={{border:"black",textAlign:"center"}}>
<thead>
  <tr>
    <th  colSpan={2} style={{backgroundColor:"#BFBFBF",color:"white",textAlign:"center"}}>الإثنين 27-11-2023</th>
  </tr>
</thead>
<tbody>

  <tr>
    <td>-</td>
    <td>أوجه الحفظ</td>
  </tr>
 
  <tr>
    <td>-</td>
    <td>أوجه المراجعه </td>
  </tr>
  <tr>
    <td>-</td>
    <td>الدرجه </td>
  </tr>
</tbody>
</table>
    </div>


    <div className="col-3">
    <table className="table table-bordered" style={{border:"black",textAlign:"center"}}>
<thead>
  <tr>
    <th  colSpan={2} style={{backgroundColor:"#BFBFBF",color:"white",textAlign:"center"}}>الأحد 26-11-2023</th>
  </tr>
</thead>
<tbody>

  <tr>
    <td>-</td>
    <td>أوجه الحفظ</td>
  </tr>
 
  <tr>
    <td>-</td>
    <td>أوجه المراجعه </td>
  </tr>
  <tr>
    <td>-</td>
    <td>الدرجه </td>
  </tr>
</tbody>
</table>
    </div>




  </div>
</div>



{/* the end */}
</div>









  </>
}
