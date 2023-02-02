package main

import (
	"encoding/csv"
	"fmt"
	"io"
	"log"
	"os"
	"strconv"
	"strings"
)

type expense struct {
	Date   string
	Name   string
	Amount float64
}

func newExpense(date string, name string, amount string) *expense {
	parseAmount, err := strconv.ParseFloat(amount, 64)
	if err != nil {
		log.Fatal(err)
		parseAmount = 0.0
	}

	expense := expense{
		Date:   date,
		Name:   name,
		Amount: parseAmount,
	}

	return &expense
}

func generateExpenseList(filename string) []expense {
	var expenseList []expense

	file, err := os.Open(filename)
	if err != nil {
		log.Fatal(err)
	}

	csvReader := csv.NewReader(file)
	for {
		record, err := csvReader.Read()
		if err == io.EOF {
			break
		}
		if err != nil {
			log.Fatal(err)
		}

		if strings.Contains(record[1], "PAYMENT") {
			continue
		}

		expense := newExpense(record[0], record[1], record[2])
		expenseList = append(expenseList, *expense)
	}

	file.Close()

	return expenseList
}

func main() {
	fmt.Println("Starting...")
	expenseList := generateExpenseList("testData/accountactivity.csv")

	for i, e := range expenseList {
		fmt.Println(i, e)
	}
}
