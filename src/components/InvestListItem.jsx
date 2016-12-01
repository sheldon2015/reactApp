import React from 'react';

const InvestListItem = (props) => {

    return (
        <li className='item'>
            <a className='item-link fz16' href={props.value.bidid}>
                <span>{props.value.bidname}</span>
                <div className='item-content'>
                    <div className='item-1'>
                        <div>{props.value.lilv}</div>
                        <div>年化利率</div>
                    </div>
                    <div className='item-1'>
                        <div>{props.value.qixian}个月</div>
                        <div>期限</div>
                    </div>
                    <div className='item-1'>
                        <div>{props.value.zonge}万</div>
                        <div>总额</div>
                    </div>
                    <div className='item-1'>
                        <div>{props.value.zhuangtai}</div>
                    </div>
                </div>
            </a>
        </li>
    );
};

export default InvestListItem;