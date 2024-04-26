const Skills = require('../models/skillsModel');
const { errorResponse, successResponse } = require('../utils/apiResponse');

const getAllSkills = async (req, res) => {
    try {
        const skills = await Skills.find();
        return successResponse(res, 200, skills);
    } catch (error) {
        return errorResponse(res, 500, `Erro ao buscar Skills: ${error.message}`);
    }
}

const getSkillById = async (req, res) => {
    try {
        const skill = await Skills.findById(req.params.id);
        if (!skill) {
            return errorResponse(res, 404, "Skill não encontrada");
        }
        return successResponse(res, 200, skill);
    } catch (error) {
        return errorResponse(res, 500, `Erro ao buscar Skill: ${error.message}`);
    }
}

const createSkill = async (req, res) => {
    try {
        const newSkill = new Skills(req.body);
        await newSkill.save();
        return successResponse(res, 201, newSkill);
    } catch (error) {
        return errorResponse(res, 500, `Erro ao criar Skill: ${error.message}`);
    }
}

const updateSkill = async (req, res) => {
    try {
        const skill = await Skills.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!skill) {
            return errorResponse(res, 404, "Skill não encontrada");
        }
        return successResponse(res, 200, skill);
    }
    catch (error) {
        return errorResponse(res, 500, `Erro ao atualizar Skill: ${error.message}`);
    }
}

const deleteSkill = async (req, res) => {
    try {
        const skill = await Skills.findByIdAndDelete(req.params.id);
        if (!skill) {
            return errorResponse(res, 404, "Skill não encontrada");
        }
        return successResponse(res, 200, "Skill deletada com sucesso");
    } catch (error) {
        return errorResponse(res, 500, `Erro ao deletar Skill: ${error.message}`);
    }
}

module.exports = {
    getAllSkills,
    getSkillById,
    createSkill,
    updateSkill,
    deleteSkill,
};
