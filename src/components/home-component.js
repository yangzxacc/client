import React from "react";

const HomeComponent = () => {
  return (
    <main>
      <div className="container py-4">
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Mydemy课程系统</h1>
            <p className="col-md-8 fs-4">
              本系統使用 React.js 作為前端框架，Node.js、MongoDB
              作为后台服务。本项目为 MERN 项目。
            </p>
            <button className="btn btn-primary btn-lg" type="button">
              See how it works.
            </button>
          </div>
        </div>

        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 text-white bg-dark rounded-3">
              <h2>作为一个学生</h2>
              <p>学生可以注册他们喜欢的课程</p>
              <button className="btn btn-outline-light" type="button">
                登录，或注册成为会员
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>作为一名讲师</h2>
              <p>您可以通过注册成为一名讲师，并开始制作在线课程</p>
              <button className="btn btn-outline-secondary" type="button">
                开始设置您的课程
              </button>
            </div>
          </div>
        </div>

        <footer className="pt-3 mt-4 text-muted border-top">
          &copy; 2023 Jasson Yang
        </footer>
      </div>
    </main>
  );
};

export default HomeComponent;
