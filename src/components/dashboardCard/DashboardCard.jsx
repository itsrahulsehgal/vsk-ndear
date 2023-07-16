import './dashboardCard.css';
// import { Box } from "@mui/material";

const DashboardCard = () => {

    return (
        <>

            <div class="frame-20">
                <div class="frame-19">
                    <div class="nishtha">NISHTHA</div>

                    <img class="nishtha-01-01-1" src="nishtha-01-01-1.png" />
                </div>

                <div class="frame-15">
                    <div class="_57-94-l">57.94L</div>

                    <div class="total-teachers-participated">Total Teachers Participated</div>
                </div>

                <div class="frame-16">
                    <div class="_4-03-k">4.03K</div>

                    <div class="total-courses-launched">Total Courses Launched</div>
                </div>

               
                    <button value= "Access Dashboard" type="button" class="frame-17" >Access Dashboard </button>

                
            </div>


        </>
    );
};

export default DashboardCard;
