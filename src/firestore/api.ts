import firebase from "firebase/compat/app";

export const getPortfolio = async (id: number | string | null = null) => {
  try {
    const db = firebase.firestore();
    const portfolioRef = db.collection('portfolio').doc('T7zXc2chQljB1M040q9I');

    const portfolioDoc = await portfolioRef.get();


    const portfolioData = portfolioDoc.data();

    if (portfolioData?.portfolio) {
      if(id){
        const find = portfolioData.portfolio.find((item: any) => +item.id === +id)
        console.log('find', find)
        if(find) return find
      }

      return portfolioData.portfolio
    } else {
      console.log('Portfolio document or portfolio data does not exist.');
    }
  } catch (err) {
    console.error('Error fetching portfolio:', err);
  }
}











