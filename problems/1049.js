export function problem(lines){
    const N = parseInt(lines[0]);

    let dentroIntervalo = 0;
    let foraIntervalo = 0;

    for(let i = 1; i <= N; i++){
        const X = parseInt(lines[i]);
        if(X >= 10 && X <= 20){
            dentroIntervalo++;
        } else{
            foraIntervalo++;
        }
    }

    console.log(`${dentroIntervalo} in`)
    console.log(`${foraIntervalo} out`)
    
}