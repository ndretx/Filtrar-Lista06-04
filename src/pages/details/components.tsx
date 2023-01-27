import styled from "styled-components";

export const Container = styled.div`
    padding: 4rem 0;

    h1 {
        margin: 3rem 0;
    }

    img {
        width: 500px;
        border-radius: 1rem;
    }

    .movie {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 4rem;
        max-width: 50%;
    }

    button {
        background: #6654da;
        border: none;
        cursor: pointer;
        border-radius: 1rem;
        color: white;
        padding: 0.8rem 2rem;
        margin-top: 1rem;
        font-size: 100%;
        transition: 0.3s;
    }

    button:hover {
        background: #5848c2;
    }

    span {
        line-height: 130%;
        margin-bottom: 1rem;
        font-size: 110%;
    }

    .releaseDate {
        opacity: 0.5;
    }
`

export const CastList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    column-gap: 1rem;
    row-gap: 1rem;
`

export const CastItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 100px;
        border-radius: 1rem;
        margin-bottom: 2rem;
    }

    span {        
        font-size: 100%;
        text-align: center;
    }

    a {
        transition: all 0.3s;
    }

    a:hover {
        transform: scale(1.1);
    }
`