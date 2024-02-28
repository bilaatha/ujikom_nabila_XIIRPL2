import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, useRef, useContext, createContext, } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import React from "react";
import "./App.css";
import axios from "axios";
import ConfigAxios from "./variable/ConfigAxios.js";
import DataContext from "./variable/Context.js";
// func
import UserFunction from "./func/UserFunction.js";

// komponent
import NewAlbum from "./components/NewAlbum.jsx";
import Comment from "./components/Comment.jsx";
import Nav from "./components/Nav.jsx";
import Tab from "./components/Tab.jsx";
import Middleware from "./components/Middleware.jsx";

// layout
import LayoutForm from "./layouts/LayoutForm.jsx";
import LayoutPage from "./layouts/LayoutPage.jsx";

// pages
import Register from "./pages/Login/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import PostFoto from "./pages/PostFoto.jsx";
import EditFoto from "./pages/EditFoto.jsx";
import Login from "./pages/Login/Login.jsx";
import Welcome from "./pages/Welcome.jsx";
import Profile from "./pages/Profile.jsx";
import Detail from "./pages/Detail.jsx";
import Notfound from "./pages/404.jsx";
import Album from "./pages/Album.jsx";
import Liked from "./pages/Liked.jsx";

export {
  createContext,
  UserFunction,
  ConfigAxios,
  DataContext,
  useNavigate,
  useContext,
  Middleware,
  LayoutForm,
  LayoutPage,
  useParams,
  useEffect,
  Dashboard,
  Register,
  PostFoto,
  EditFoto,
  ReactDOM,
  useState,
  NewAlbum,
  Notfound,
  Profile,
  Welcome,
  Comment,
  Detail,
  useRef,
  Routes,
  Router,
  Route,
  React,
  Album,
  Login,
  Liked,
  axios,
  Link,
  App,
  Tab,
  Nav,
};
