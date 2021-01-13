/* eslint-disable no-console */
/* eslint-disable indent */

function delegateTasks(tasks, team, round){
    let tasksCompleted= 0;
    let taskStats=[];
    let score=0;
    let max= '1 Hour';
    if (!round){
        round = 1;
        console.log(`     ROUND ${round} ~ Time allowance ${max}`);
    }
    for (let i=0; i < team; i++){
        const start = Math.floor(tasks/team*i+1);
        const end = Math.floor(tasks/team*(i+1));
        if (start === end){
            console.log(`Teammate ${i+1} to complete task #${start}`);
        }else{
            console.log(`Teammate ${i+1} to complete tasks #${start} to #${end}`);
        }
        if (tasks/team <= 1){
            score = Math.round(tasks/team);
        }else{
            score= Math.floor(Math.random() * (end-start+1));//randomly generate amount of tasks the teammate completes this round
        }
        if (score === 1){
            taskStats.push(`${'\n'}Teammate ${i+1} completed ${score} task`);
        }else{
            taskStats.push(`${'\n'}Teammate ${i+1} completed ${score} tasks`);
        }
        tasksCompleted+= score;
    }
    setTimeout(()=>{console.log('\nPlease wait, teammates are working...\n');},4000);
    clearTimeout();
    setTimeout(()=>{
        console.log(`******Member stats******${taskStats}${'\n'}`);
        if(tasksCompleted === 1 && tasks-tasksCompleted === 1){
            console.log(`The team completed ${tasksCompleted} task in round ${round}.${'\n'}${tasks-tasksCompleted} task left to complete.${'\n'}`);
        }else if (tasksCompleted === 1 ){
            console.log(`The team completed ${tasksCompleted} task in round ${round}.${'\n'}${tasks-tasksCompleted} tasks left to complete.${'\n'}`);
        }else {
            console.log(`The team completed ${tasksCompleted} tasks in round ${round}.${'\n'}${tasks-tasksCompleted} tasks left to complete.${'\n'}`);
        }
    },8000);
    clearTimeout();
    setTimeout(()=>{
        if (tasks-tasksCompleted === 0){
            const plural= ()=>{console.log(`Congratulations teammates! you completed all of the tasks in ${round} rounds!`);};
            const singular= ()=>{console.log(`Congratulations teammates! you completed all of the tasks in ${round} round! I bet you couldn't do that twice!`);};
            if (round===1){
                return singular();
            }else{
                return plural();
            }
        }else{
            console.log(`Next round begins in 4 seconds.${'\n'}${'\n'}          GET READY!${'\n'}${'\n'}~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
            round++;
            setTimeout(()=>{
                let taskDiff= tasks-tasksCompleted;
                console.log(`   ROUND ${round} ~ Time allowance ${max}`);
                return delegateTasks(taskDiff, team, round);
            },4000);
            clearTimeout();
        }
    },12000);
    clearTimeout();
}
delegateTasks(75, 12);
