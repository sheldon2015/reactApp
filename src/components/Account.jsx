import React from "react";
require("./../less/account.less");

const Account = props => {
	return (
		<div className="account">
			<div className="a-head">
				<h2 className="greet text-center">
					你好!sheldon
				</h2>
				<div className="a-wrap text-center">
					<div className="head-item">
						<div>账户总资产(元)</div>
						<div>1999.00</div>
					</div>
					<div className="head-item">
						<div>可用余额(元)</div>
						<div>1999.00</div>
					</div>
				</div>
			</div>
			<div className="a-middle text-center">
				<div className="middle-item">
					<div>累计已赚(元)</div>
					<div>999.00</div>
				</div>

				<div className="middle-item">
					<div>利息管理费(元)</div>
					<div>1.00</div>

				</div>

			</div>

			<div className="item">

				<a href="">

					资金记录
				</a>

			</div>

			<div className="item">
				<a href="">
					充值
				</a>
			</div>
			<div className="item">
				<a href="">
					提现
				</a>
			</div>
			<div className="item">
				<a href="">
					投资列表
				</a>
			</div>
			<div className="item">
				<a href="">
					安全中心
				</a>
			</div>
			<div className="item">
				<a href="">
					我的推荐
				</a>
			</div>
			<div className="item">
				<a href="">
					爱投券
				</a>
			</div>
			<div className="item">
				<a href="">
					登录汇付
				</a>
			</div>
			<div className="item" />
		</div>
	);
};

export default Account;
