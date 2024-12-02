/* union type  합집합 */





let str: 'name' | 'age' | 'address'; // 파이프라인

// str = 'email'; //에러!
str = 'name' ;







type CompanyA = {
  companyName:string,
  since:number
}

// type CompanyB = CompanyA & {
//   ceo:string
// }

type CompanyB = {
  ceo:string
}

type Company = CompanyA & CompanyB;

type _Company = CompanyA | CompanyB; 



/* intersection type 교집합 */
interface CompanyC extends CompanyA { // 조금 더 직관적.....
  ceo:string
}



const company1:Company = {
  companyName: '8b-studio',
  since:2022,
  ceo:'kindTiger'
}

const company2:Company = {
  companyName:'apple',
  since:2010,
  ceo:'steve'
}

const company3:_Company = {
  companyName:'apple',
  since:2010,
  
}





