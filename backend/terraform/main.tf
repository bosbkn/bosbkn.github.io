provider "aws" {
  region = "us-east-1"
}

resource "aws_lambda_function" "logger" {
  function_name = "logger"
  role          = aws_iam_role.lambda_role.arn
  handler       = "index.handler"
  runtime       = "nodejs20.x"
  timeout       = 10

  filename         = "lambda_function.zip"
  source_code_hash = filebase64sha256("lambda_function.zip")
}

resource "aws_iam_role" "lambda_role" {
  name = "logger-lambda-role"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
EOF
}

resource "null_resource" "build_zip" {
  triggers = {
    files = fileset(".", "**/*.ts")
  }

  provisioner "local-exec" {
    command = "npm run build && zip -r lambda_function.zip dist"
  }
}

