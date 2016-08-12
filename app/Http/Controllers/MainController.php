<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class MainController extends Controller
{
	public function index($template)
	{
		$templatePath = 'frontend.' . $template;
		
		if (!view()->exists($templatePath)) {
			throw new NotFoundHttpException();
		}
		
		return view($templatePath);
	}
}
