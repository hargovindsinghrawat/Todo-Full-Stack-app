package com.project.springboot.todoapp.todo;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttribute;

import jakarta.validation.Valid;

@Controller
public class TodoControllerJpa {
	
	public TodoControllerJpa(TodoService todoService, TodoRepository todoRepository) {
		super();
//		this.todoService = todoService;
		this.todoRepository = todoRepository;
	}

//	private TodoService todoService;
	
	private TodoRepository todoRepository;

	@RequestMapping("list-todos")
	public String listAllTodos(ModelMap model) {
		
		String username = getLoggedInUsername(model);
		
//		List<Todo> todos = todoService.findByUsername(username);
		List<Todo> todos = todoRepository.findByUsername(username);
		model.addAttribute("todos", todos);
		
		return "listTodos";
	}

	@RequestMapping(value = "add-todo", method = RequestMethod.GET)
	public String showTodoPage(ModelMap model) {
		
		String username = getLoggedInUsername(model);
		Todo todo = new Todo(0, username, "", LocalDate.now().plusYears(1), false);
		model.put("todo", todo);
		
		return "todo";
	}

	@RequestMapping(value = "add-todo", method = RequestMethod.POST)
	public String addNewTodo(ModelMap model, @Valid Todo todo, BindingResult result) {
		if (result.hasErrors()) {
			return "todo";
		}
		String username = getLoggedInUsername(model);
		todo.setUsername(username);
		
		todoRepository.save(todo);	
//		todoService.addtodo(username, todo.getDescription(), todo.getTargetDate(), todo.isDone());
		
		return "redirect:list-todos";
	}

	@RequestMapping("delete-todo")
	public String deleteTodo(@RequestParam int id) {
		
		todoRepository.deleteById(id);
//		todoService.deleteById(id);
		
		return "redirect:list-todos";
	}

	@RequestMapping(value = "update-todo", method = RequestMethod.GET)
	public String showUpdateTodoPage(@RequestParam int id, ModelMap model) {

	//  Todo todo = todoService.findbyId(id);
		Todo todo = todoRepository.findById(id).get();
		
		model.put("todo", todo);
		
		return "todo";
	}
	
	@RequestMapping(value = "update-todo", method = RequestMethod.POST)
	public String updateTodo(ModelMap model, @Valid Todo todo, BindingResult result) {
		
		if (result.hasErrors()) {
			return "todo";
		}
		String username = getLoggedInUsername(model);
		todo.setUsername(username);
		
//		todoService.updateTodo(todo);
		todoRepository.save(todo);
		
		return "redirect:list-todos";
	}
	
	private String getLoggedInUsername(ModelMap model) {
		
		Authentication authentication = 
				SecurityContextHolder.getContext().getAuthentication();
		
		return authentication.getName();
	}
}
