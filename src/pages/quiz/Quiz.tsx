import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "../../services/store";
import {fetchCountry} from "../../services/country-page/thunk";
import {useNavigate, useParams} from "react-router-dom";
import CompassPreloader from "../../UI/compass-preloader/CompassPreloader";
import {createQuestions, deleteQuestions} from "../../services/quiz-questions/slice";
import styles from './Quiz.module.css'

const Quiz = () => {
    const params = useParams()

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(() => {
        const currentIndex = localStorage.getItem('quizIndex')
        return currentIndex ? parseInt(currentIndex, 10) : 0;
    });

    const [rightAnswerCount, setRightAnswerCount] = useState(() => {
        const count = localStorage.getItem('rac')
        return count ? parseInt(count, 10) : 0
    });
    
    const quizQuestions = useSelector(state => state.quizQuestions.items);
    let countryInfo = useSelector((state) => {

        if (state.countryPage.countryInfo.item && state.countryPage.countryInfo.item.cca3 === params.cca3) {
             return state.countryPage.countryInfo.item
        }
        
        return state.countryPage.compareCountryInfo.item
    })
    const countries = useSelector(state => state.countries.items);
    const loading = useSelector(state => state.countryPage.countryInfo.loading)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!countryInfo || countryInfo.cca3 !== params.cca3) {
            //@ts-ignore
            dispatch(fetchCountry(params.cca3))
        }

        return () => {
            dispatch(deleteQuestions())
        }
    }, [countryInfo, dispatch, params.cca3]);

    useEffect(() => {
        if (countryInfo && quizQuestions.length === 0) {
            dispatch(createQuestions(
                [countryInfo, countries]
            ))
        }
    }, [countryInfo, quizQuestions, dispatch, countries])

    if (loading) {
        return (
            <div style={{width: '100%', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <CompassPreloader />
            </div>
        )
    }

    const startQuiz = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        localStorage.setItem('quizIndex', '1');
    }

    const answerQuiz = (e: React.MouseEvent<HTMLButtonElement>, answer: string) => {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        localStorage.setItem('quizIndex', String(currentQuestionIndex + 1));
        if (e.currentTarget.textContent === answer) {
            setRightAnswerCount(rightAnswerCount + 1)
            localStorage.setItem('rac', String(rightAnswerCount + 1))
        }
    }

    const tryAgain = () => {
        dispatch(createQuestions(
            [countryInfo, countries]
        ))
        setCurrentQuestionIndex(1)
        setRightAnswerCount(0)
        localStorage.setItem('quizIndex', '1');
        localStorage.setItem('rac', '0')
    }

    const index = currentQuestionIndex - 1

    const mainDivStyle = currentQuestionIndex === 0 || currentQuestionIndex > quizQuestions.length ? {justifyContent: 'center', gap: '0'} : {justifyContent: 'flex-end'};

    return (
        <div className={styles.div} style={mainDivStyle}>
            {currentQuestionIndex === 0 &&
                countryInfo &&
                <div className={styles.greetDiv}>
                    <img src={countryInfo?.flags.png} alt={countryInfo?.flags.alt} width='200'/>
                    <p className={styles.greetText}>
                        {`Are you ready to answer a few questions about ${countryInfo?.name?.common}?`}
                    </p>
                    <button onClick={startQuiz} className={styles.button} type='button'>Get started!</button>
                </div>
            }
            {currentQuestionIndex > 0 &&
                currentQuestionIndex <= quizQuestions.length &&
                <>
                    <p className={styles.question}>{quizQuestions[index].question}</p>
                    <div className={styles.buttonsDiv}>
                        <button onClick={(e) => answerQuiz(e, quizQuestions[index].answer)} className={styles.answer}>{quizQuestions[index].options[0]}</button>
                        <button onClick={(e) => answerQuiz(e, quizQuestions[index].answer)} className={styles.answer}>{quizQuestions[index].options[1]}</button>
                        <button onClick={(e) => answerQuiz(e, quizQuestions[index].answer)} className={styles.answer}>{quizQuestions[index].options[2]}</button>
                        <button onClick={(e) => answerQuiz(e, quizQuestions[index].answer)} className={styles.answer}>{quizQuestions[index].options[3]}</button>
                    </div>
                </>
            }
            {currentQuestionIndex > quizQuestions.length &&
                <div style={{display: 'flex', flexDirection: 'column' ,gap: '50px', marginTop: '-20px'}}>
                    <p className={styles.result}>{`You're result: ${rightAnswerCount}/${quizQuestions.length}`}</p>
                    <div style={{display: 'flex', gap: '20px'}}>
                        <button onClick={() => {
                            navigate('/')
                            localStorage.removeItem('quizIndex')
                            localStorage.removeItem('rac')
                        }} 
                        className={styles.button}>Go to home</button>
                        <button onClick={tryAgain} className={styles.button}>Try again</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default Quiz;