

const CurrentYear = () => {
  const getCurrentYear = () => {
    const currentDate = new Date();
    return currentDate.getFullYear();
  };

  const currentYear = getCurrentYear();

  return (
    <div>
      <p className="inline-block">Copyright {currentYear}- All right reserved by ARABIAN ISPAT LTD.</p>
    </div>
  );
};

export default CurrentYear;
