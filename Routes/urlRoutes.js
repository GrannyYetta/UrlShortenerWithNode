import express from "express";

import { nanoid } from "nanoid";

import Url from "../Models/urlModel.js";

import { validateUrl } from "../utils/utils.js";

import dotenv from "dotenv";
dotenv.config({ path: "../config/.env" });


