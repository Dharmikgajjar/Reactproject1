function RestSpread() {

  const numbersOne = [10, 20, 30];
  const numbersTwo = [40, 50, 60];
  const combinedNumbers = [...numbersOne, ...numbersTwo];

 
  const companyDetails = { brandName: 'Apple', Since: 1983 };
  const companyLocation = { city: 'California', country: 'USA' };
  const fullProfile = { ...companyDetails, ...companyLocation };

  
  const baseProduct = { item: 'Macbook Pro', price: 145000 };
  const updatedProductCopy = { ...baseProduct, price: 142000 };

 
  const calculateSum = (label, ...values) => {
    const sumTotal = values.reduce((a, b) => a + b, 0);
    return `${label}: ${sumTotal}`;
  };

  const functionResult = calculateSum('Total Score', 15, 25, 35, 25);

  return (
    <div>
      <h2>Task 3: Rest & Spread Operator</h2>

      <h3>Merged Arrays</h3>
      <p>{combinedNumbers.join(', ')}</p>

      <h3>Merged Objects</h3>
      <p>{JSON.stringify(fullProfile)}</p>

      <h3>Copied Object</h3>
      <p>{JSON.stringify(updatedProductCopy)}</p>

      <h3>Rest Operator Function</h3>
      <p>{functionResult}</p>
      <hr />
    </div>
  );
}

export default RestSpread;