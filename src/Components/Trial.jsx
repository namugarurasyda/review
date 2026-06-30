import react, {useState, useEffect} from 'react';

export function Trial(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCount(count + 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [count]);

return (
    <div>
        <h4>Trial Component</h4>
    </div>
)    
};