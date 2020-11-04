const express = require('express');
const router  = express.Router();
const Utils = require('../utils/utils');
const { CodeExecutor,languages } = require('code-executor');
const codeExecutor = new CodeExecutor('interviewPadNeo', 'redis://127.0.0.1:6379');

async function executeCode(inputObject){
    const input = {
        ...inputObject,timeout:2
    };
    console.log(input);
    try{
        const results = await codeExecutor.runCode(input);
        console.log(results);
        return results;
    } catch(err){
        console.log(err);
        throw err.toString();
    }
}

/* POST Execute some code */
router.post('/',async (req,res,next) =>{
    const {language,code,testCases} = req.body;
    if (!Utils.checkNulls({language,code,testCases})){
        res.status(400).json({err:true,msg:'Bad Request'});
    }
    try{
        const execData  = await executeCode({language,code,testCases});
        res.json({err:false,...execData});
    } catch(error){
        console.log('error',error);
        res.status(500).json({err:true,msg:error})
    }
});

module.exports  = router;