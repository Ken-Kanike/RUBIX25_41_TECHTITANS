import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    display: none;
    width: 100%;
    padding: 10px;
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.text_black};
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 0 8px rgba(0,0,0,0.1);
`;

const Card = styled.div`
    width: 330px;
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    border-radius: 12px;
    box-shadow: 0 0 16px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    transition: all 0.4s ease-in-out;
    
    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 0 30px 6px rgba(0, 0, 0, 0.15);
        filter: brightness(1.05);
    }
    
    &:hover ${Button} {
        display: block;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 180px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

const Tag = styled.span`
    font-size: 12px;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary + '15'};
    padding: 4px 10px;
    border-radius: 18px;
    font-weight: 500;
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const Title = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + '80'};
`;

const Description = styled.div`
    font-size: 14px;
    color: ${({ theme }) => theme.text_secondary + '99'};
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Members = styled.div`
    display: flex;
    align-items: center;
`;

const Avatar = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin-left: -6px;
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0 0 8px rgba(0,0,0,0.2);
    border: 2px solid ${({ theme }) => theme.card};
`;

const HackathonsCard = ({ hackathon, setOpenModal }) => {
    return (
        <Card onClick={() => setOpenModal({ state: true, project: hackathon })}>
            <Image src={hackathon.image} />
            <Tags>
                {hackathon.tags?.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Title>{hackathon.title}</Title>
                <Date>{hackathon.date}</Date>
                <Description>{hackathon.description}</Description>
            </Details>
            {/* <Button>View Project</Button> */}
        </Card>
    );
};

export default HackathonsCard;
